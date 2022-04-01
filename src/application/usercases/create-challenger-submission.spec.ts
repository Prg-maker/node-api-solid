import {CreateChanllengerSubmission} from './create-challenge-submission'

describe('Create challenger submission use case' , ()=> {
  it('should ne able to create a new challenger submission', async ()=> {

    const sut  = new CreateChanllengerSubmission()

    const response = await sut.execute({
      studentId:'fake-student-id',
      challengerId:"fake-challenger-id"
    })


    expect(response).toBeTruthy()

  })
})