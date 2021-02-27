import { Request, Response } from "express";
import { getCustomRepository, IsNull, Not } from "typeorm";
import { SurveysUserRepository } from "../repositories/SurveysUserRepository";

class NpsController {
    async execute(request: Request, response: Response) {
        const { survey_id } = request.params;

        const surveysUsersRepository = await getCustomRepository(SurveysUserRepository);

        const surveysUsers = await surveysUsersRepository.find({
            survey_id,
            value: Not(IsNull(),)
        });

        const detractors = surveysUsers.filter(
            (survey) => survey.value >= 0 && survey.value <= 6
        ).length;

        const Promoters = surveysUsers.filter(
            (survey) => survey.value >= 9 && survey.value <= 10
        ).length;

        const passives = surveysUsers.filter(
            (survey) => survey.value >= 7 && survey.value <= 8
        ).length;

        const totalAnsers = surveysUsers.length;

        const calculate = ((Promoters - detractors) / totalAnsers) * 100;

        return response.json({
            detractors,
            Promoters,
            passives,
            totalAnsers,
            nps: calculate
        });
    }
}
export { NpsController };