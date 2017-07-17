'use strict'

const express = require('express')
const router = new express.Router()
const models = require('../db/models')
const Student = models.Student
const Campus = models.Campus
module.exports = router

//all students
router.get('/', function(req,res,next){
  Student.findAll()
  .then(students => res.json(students))
  .catch(next)
})

router.param('id', function(req,res,next,id){
  Student.findById(id)
  .then(student => {
    if(!student){
      const err = Error('Student not found')
      err.status = 404
      throw err
    }
    student.getCampus()

    req.student = student
    next()
  })
  .catch(next)
})

router.get('/:id', function(req,res,next){
  res.json(req.student)
})

router.put('/:id', function(req,res,next){
  req.student.update(req.body)
  .then(student => res.status(200).json(student))
  .catch(next)
})

router.delete('/:id', function(req,res,next){
  const student = req.student
  req.student.destroy()
  .then(() => res.status(200).json(student))
  .catch(next)
})

router.post('/', function(req,res,next){
  console.log(req.body)
  Campus.findOne({//Any reason you didn't just do findById?
    where:{
      id: req.body.campusId
    }
  })
  .then(campus => {
    const student = Student.build(req.body)
    student.setCampus(campus, { save: false})
    return student.save()
      .then(studentOut => {//keep it flush!  Try your best not to nest then's unless absolutely necessary ***
        studentOut = studentOut.toJSON()
        studentOut.campus = campus
        return studentOut
      })
  })
  .then(student => {
    res.json(student)
  })
  .catch(next)
})
