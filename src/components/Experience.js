import { Title } from "./Title"
import { ExperienceCard } from "./ExperienceCard"
import { DotP } from "./DotP"

export const Experience = () => {
    return (
        <>
            <Title title={'Experience'} description={'Here is a quick summary of my most recent experiences:'}></Title>

            <div className="flex flex-col justify-center items-center gap-[48px]">
                <ExperienceCard
                    title={"Sr. Frontend Developer"}
                    description={
                        <div>
                            <DotP description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}></DotP>
                            <DotP description={'Ut pretium arcu et massa semper, id fringilla leo semper.'}></DotP>
                            <DotP description={'Sed quis justo ac magna.'}></DotP>
                            <DotP description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}></DotP>
                        </div>
                    }
                    onsar={'Nov 2021-Present'}
                ></ExperienceCard>

                <ExperienceCard
                    title={"Sr. Frontend Developer"}
                    description={
                        <div>
                            <DotP description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}></DotP>
                            <DotP description={'Ut pretium arcu et massa semper, id fringilla leo semper.'}></DotP>
                            <DotP description={'Sed quis justo ac magna.'}></DotP>
                            <DotP description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}></DotP>
                        </div>
                    }
                    onsar={'Nov 2021 - Present'}
                ></ExperienceCard>

                <ExperienceCard
                    title={"Sr. Frontend Developer"}
                    description={
                        <div>
                            <DotP description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}></DotP>
                            <DotP description={'Ut pretium arcu et massa semper, id fringilla leo semper.'}></DotP>
                            <DotP description={'Sed quis justo ac magna.'}></DotP>
                            <DotP description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}></DotP>
                        </div>
                    }
                    onsar={'Nov 2021 - Present'}
                ></ExperienceCard>
            </div>
        </>
    )
}