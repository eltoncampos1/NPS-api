import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { resolve } from 'path';

import { SurveysRepository } from "../repositories/SurveysRepository";
import { SurveysUserRepository } from "../repositories/SurveysUserRepository";
import { UsersRepository } from "../repositories/UsersRepository";
import SendmailService from "../services/SendmailService";

class SendMailController {
    async execute(request: Request, response: Response) {
        const { email, survey_id } = request.body;
        
        const usersRepository = await getCustomRepository(UsersRepository);
        const sursveysRepository = await getCustomRepository(SurveysRepository);
        const surveysUserRepositoy = await getCustomRepository(SurveysUserRepository);

        const user = await usersRepository.findOne({ email });

        if (!user) {
            return response.status(400).json({
                error: 'User does not exists'
            });
        }

        const survey = await sursveysRepository.findOne({ id: survey_id });

        if (!survey) {
             return response.status(400).json({
                error: 'Survey does not exists'
            });
        };

        const surveysUserAlreadyExists = await surveysUserRepositoy.findOne({
            where: [{ user_id: user.id }, { value: null }]
        });

        const npsPath = resolve(__dirname, '..', 'views', 'emails', 'npsmail.hbs');

        const variables = {
            name: user.name,
            title: survey.title,
            description: survey.description,
            user_id: user.id,
            link: process.env.URL_MAIL, 
        };


        if (surveysUserAlreadyExists) {
            await SendmailService.execute(email, survey.title, variables, npsPath);

            return response.json(surveysUserAlreadyExists);
        }

        const surveyUser = surveysUserRepositoy.create({
            user_id: user.id,
            survey_id,
        });

        
        
        await surveysUserRepositoy.save(surveyUser);
        

        await SendmailService.execute(email, survey.title, variables, npsPath)

        return response.json(surveyUser); 
    }
}

export { SendMailController };