import JourneyCard from './JourneyCard';
import { projectData } from '../../projectData';
import iButton from '../../assests/images/iButton.svg'

const JourneyBoardsContainer = () => {
    // const cardsData = [
    //     {
    //         title: 'Technical Project Management',
    //         description: 'Story of Alignment Scope of Agility Specific Accountable Staggering Approach',
    //         content: <iframe width="100%" height="200" src="https://www.youtube.com/embed/example" title="YouTube video" />, // Example iframe
    //     },
    //     {
    //         title: 'Threadbuild',
    //         description: 'Watch the video and threadbuild, and jot out key threads while watching the video',
    //         content: (
    //             <div>
    //                 <h4 className="font-bold">Thread A</h4>
    //                 <div className="grid grid-cols-2 gap-4">
    //                     <textarea placeholder="Sub thread 1" className="border p-2 w-full" />
    //                     <textarea placeholder="Sub Interpretation 1" className="border p-2 w-full" />
    //                 </div>
    //                 <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">+ Sub-thread</button>
    //                 <textarea placeholder="Summary for Thread A" className="border p-2 w-full mt-2" />
    //             </div>
    //         ),
    //     },
    //     {
    //         title: 'Structure your Pointers',
    //         description: 'Write a 300 - 400 word article from your thread. Publish your understanding and showcase your understanding to the entire world',
    //         content: (
    //             <div>
    //                 <input type="text" placeholder="Title" className="border p-2 w-full mb-2" />
    //                 <textarea placeholder="Content" className="border p-2 w-full" rows="6" />
    //             </div>
    //         ),
    //     },
    //     {
    //         title: '4SA Method',
    //         description: 'To explore more read more',
    //         content: (
    //             <div>
    //                 <details>
    //                     <summary className="font-bold">Introduction</summary>
    //                     <p>The 4SA Method, How to bring an idea into progress?</p>
    //                 </details>
    //                 <details>
    //                     <summary className="font-bold">Thread A</summary>
    //                     <p>How are you going to develop your strategy? Which method are you going to use to develop a strategy? What if the project is lengthy?</p>
    //                     <details>
    //                         <summary className="font-bold">Example 1</summary>
    //                         <p>You have a concept, How will you put into progress?</p>
    //                     </details>
    //                 </details>
    //             </div>
    //         ),
    //     },
    // ];

    const data = projectData
    console.log(data);

    return (
        <div className="flex justify-around flex-wrap gap-4">
            {data.tasks[0].assets.map((asset) => (
                <JourneyCard
                    key={asset.asset_id}
                    title={asset.asset_title}
                    description={asset.asset_description}
                    icon={iButton}

                >
                    {
                        {
                            card1: 'hi',
                            card2: 'jvc'
                        }
                    }
                </JourneyCard>
            ))}
        </div>
    );
};

export default JourneyBoardsContainer;
