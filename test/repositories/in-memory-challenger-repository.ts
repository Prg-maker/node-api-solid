import { ChallengersRepository } from "../../src/application/repositories/ChallengersRepository";
import { Challenger } from "../../src/domain/entities/challenger";

export class InMemoryChallengerRepository implements ChallengersRepository{
  public items: Challenger[] = []
 

  async findById(id: string): Promise<Challenger | null> {

    const challenger =  this.items.find(challenger => challenger.id === id)


    if(!challenger){
      return null
    }


    return challenger
  }
}