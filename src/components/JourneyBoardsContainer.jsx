import JourneyCard from './JourneyCard';
import { projectData } from '../../projectData';
import iButton from '../../assests/images/iButton.svg'
import ThreadA from './ThreadA';
import ArticleForm from './ArticleForm';
import YouTubeEmbed from './YouTubeEmbed';
import Method4SA from './Method4SA';

const JourneyBoardsContainer = () => {
    const data = projectData

    return (
        <div className="flex justify-around flex-wrap gap-4">
            {data.tasks[0].assets.map((asset, idx) => {
                let ComponentToRender;
                switch (idx) {
                    case 0:
                        ComponentToRender = <YouTubeEmbed />;
                        break;
                    case 1:
                        ComponentToRender = <ThreadA />;
                        break;
                    case 2:
                        ComponentToRender = <ArticleForm />;
                        break;
                    case 3:
                        ComponentToRender = <Method4SA />;
                        break;
                }
                return (
                    <JourneyCard
                        key={asset.asset_id}
                        title={asset.asset_title}
                        description={asset.asset_description}
                        icon={iButton}

                    > {ComponentToRender}
                    </JourneyCard>
                )
            })}
        </div>
    );
};

export default JourneyBoardsContainer;
