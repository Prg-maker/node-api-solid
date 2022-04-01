import { Submission } from "../../domain/entities/submission";

type CreateChanllengerSubmissionRequest = {
  studentId: string;
  challengerId: string;

}

export class CreateChanllengerSubmission {
  async execute({challengerId , studentId}: CreateChanllengerSubmissionRequest){
      const submission =  Submission.create({
        studentId,
        challengerId
      })

    return submission
  }
}