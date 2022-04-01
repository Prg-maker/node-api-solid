import { InMemoryChallengerRepository } from '../../../test/repositories/in-memory-challenger-repository'
import { InMemoryStudentRepository } from '../../../test/repositories/in-memory-students-repository'
import { Challenger } from '../../domain/entities/challenger'
import { Student } from '../../domain/entities/student'
import {CreateChanllengerSubmission} from './create-challenge-submission'

describe('Create challenger submission use case' , ()=> {
  it('should ne able to create a new challenger submission', async ()=> {

    const studentRepository = new InMemoryStudentRepository()
    const challengersRepository = new InMemoryChallengerRepository()

    const student = Student.create({
      nome:'Daniel - Teste',
      email: "email - Teste"
    })

    const challenger = Challenger.create({
      title: "new Challenger 01 - teste",
      instructionsUrl: " instructionsUrl - teste"
    })

    studentRepository.items.push(student )
    challengersRepository.items.push(challenger)

    const sut  = new CreateChanllengerSubmission(
      studentRepository,
      challengersRepository
    )

    const response = await sut.execute({
      studentId:student.id,
      challengerId:challenger.id
    })


    expect(response).toBeTruthy()

  })
})