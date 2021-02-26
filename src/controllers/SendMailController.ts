import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";
import { SurveysUserRepository } from "../repositories/SurveysUserRepository";
import { UsersRepository } from "../repositories/UsersRepository";

class SendMailController {
    async execute(request: Request, response: Response) {
        const { email, survey_id } = request.body;
        
        const usersRepository = await getCustomRepository(UsersRepository);
        const sursveysRepository = await getCustomRepository(SurveysRepository);
        const surveysUserRepositoy = await getCustomRepository(SurveysUserRepository);

        // const userAlreadyExists
    }
}

export { SendMailController };