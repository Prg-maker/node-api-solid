import { Entity } from "../../core/domain/Entity";

type ChalengerProps = {
  title: string;
  instructionsUrl: string;

}

export class Challenger extends Entity<ChalengerProps>{
  private constructor(props: ChalengerProps, id?: string){
    super(props , id)
  }

  static create(props: ChalengerProps, id?: string){
    const chalenger = new Challenger(props , id)

    return chalenger
  }

}

