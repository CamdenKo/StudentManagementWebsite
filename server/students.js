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
  req.student.destroy()
  .then(() => res.status(204).end())
  .catch(next)
})

router.post('/', function(req,res,next){
  Campus.findOrCreate({
    where:{
      name: req.body.campus
    }
  })
  .spread(campus => {
    const student = Student.build(req.body)
    student.setCampus(campus, { save: false})
    return MessageChannel.save()
      .then(student => {
        student = student.toJSON()
        student.campus= campus
        return student
      })
  })
  .then(student => {
    res.json(student)
  })
  .catch(next)
})
