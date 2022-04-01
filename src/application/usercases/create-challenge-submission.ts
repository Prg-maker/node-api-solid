import { Submission } from "../../domain/entities/submission";
import {StudentsRepository} from '../repositories/StudentsRepository'
import {ChallengersRepository} from '../repositories/ChallengersRepository'


type CreateChanllengerSubmissionRequest = {
  studentId: string;
  challengerId: string;

}

export class CreateChanllengerSubmission {

  constructor(
    private studentsRepository: StudentsRepository,
    private challengersRepository: ChallengersRepository
  ){}

  async execute({challengerId , studentId}: CreateChanllengerSubmissionRequest){
    const student = await this.studentsRepository.findById(studentId)

    if(!student){
      throw new Error('Students does not exist')
    }



    const challenger = await this.challengersRepository.findById(challengerId)

    if(!challenger){
      throw new Error('challenger does not exist')
    }

    const submission =  Submission.create({
      studentId,
      challengerId
    })

    return submission
  }
}