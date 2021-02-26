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

        const userAlreadyExists = await usersRepository.findOne({ email });

        if (!userAlreadyExists) {
            return response.status(400).json({
                error: 'User does not exists'
            });
        }

    }
}

export { SendMailController };