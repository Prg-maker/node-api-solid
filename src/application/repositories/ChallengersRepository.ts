import {Challenger} from '../../domain/entities/challenger'

export interface ChallengersRepository{
  findById(id:string): Promise<Challenger | null>
}