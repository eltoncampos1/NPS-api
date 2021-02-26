import { EntityRepository, Repository } from "typeorm";
import { SurveyUser } from "../models/SurveyUser";

@EntityRepository(SurveyUser)
class SurveysUserRepositoy extends Repository<SurveyUser>{
    
}

export { SurveysUserRepositoy };