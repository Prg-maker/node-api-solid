import { Entity } from "../../core/domain/Entity";

type ChalengerProps = {
  title: string;
  instructionsUrl: string;

}

class Chalenger extends Entity<ChalengerProps>{
  private constructor(props: ChalengerProps, id?: string){
    super(props , id)
  }

  static create(props: ChalengerProps, id?: string){
    const chalenger = new Chalenger(props , id)

    return chalenger
  }

}

