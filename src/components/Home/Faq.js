import React from 'react'

const faq = [
    {
        id: 1,
        question: 'What is NFT?',
        answer: 'A non-fungible token (NFT) is a unique and non-interchangeable unit of data stored on a digital ledger (blockchain).In the simplest terms, NFTs transform digital works of art and other collectibles into one-of-a-kind, verifiable assets that are easy to trade on the blockchain.',
    },
    {
        id: 2,
        question: 'What is Metamask?',
        answer: 'MetaMask is a software cryptocurrency wallet used to interact with the Ethereum blockchain. MetaMask provides the simplest yet most secure way to connect to blockchain-based applications.',
    },
    {
        id: 3,
        question: 'Where does my NFT go after I purchase a Headbox Squad?',
        answer: 'Your Headbox NFT will appear in the connected wallet to purchase the Headbox Squad.',
    },
    {
        id: 4,
        question: 'What can I do with my Headbox Squad?',
        answer: 'You are free to do anything with them under a non-exclusive license.',
    },
    {
        id: 5,
        question: 'Is Headbox Squad a good investment?',
        answer: 'That is definitely your decision. We believe our Headbox Squad will have a long life ahead and evolve in time. However, our success relies on many factors. But we got a high expectation that Headbox Squad would go to the Metaverse.',
    },
    {
        id: 6,
        question: 'Who are you exactly?',
        answer: 'We are just a bunch interested in art, NFT, and JOINING THE METAVERSE! We are so ready not to view the growth of the NFT but also participate in it. We would like to join in the change and be the one who brings something extraordinary to the NFT Space. So, it starts with this Headbox Squad.',
    },
    {
        id: 7,
        question: 'What kind of land will we get?',
        answer: `It's a land in THE HEADBOX LAND. Every HEADBOX unit is part of our SQUAD so, each holder will get a spot.`,
    },
]

function Faq() {
    return (
        <div className="px-12 md:px-20" id="faq">
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 max-w-[90rem] mx-auto">
                <div className="w-full md:w-1/3">
                    <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Question</h2>
                    <p className="mt-4 text-sm md:text-base">
                        Can't find the answer you're looking for? Reach out to our{' '}
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=headboxsquad@gmail.com"
                            target={'_blank'}
                            className="font-semibold text-primary hover:text-gray-900 transition-all duration-300 ease-in"
                            rel="noreferrer"
                        >
                            customer support
                        </a>{' '}
                        team.
                    </p>
                </div>
                <div className="w-full md:w-2/3 space-y-8">
                    {faq.map((item) => (
                        <div key={item.id}>
                            <p className="font-semibold text-sm md:text-base">{item.question}</p>
                            <p className="mt-2 text-gray-500 text-sm md:text-base">{item.answer}</p>
                        </div>
                    ))}
                    <div>
                        <p className="font-semibold text-sm md:text-base">What exactly is your benefit as HEADBOX SQUAD holders?</p>
                        <p className="mt-2 text-gray-500 text-sm md:text-base">
                            You don't have to worry as a holder you're not gonna get the art only but also a free land. Yes, FREE. *the terms and conditions will be announced later.
                            <br />
                            <br />
                            Another benefit is that you'll get access to our giveaway as you can see in the roadmap. There's not only a giveaway but also EVENT & MERCH! AND the most of them all is
                            that you'll be welcome as part of our community. What you get as part of the community is that you'll get every sole information & also be part of our voices to fight
                            bullying activities.
                        </p>
                    </div>
                    <div>
                        <p className="font-semibold text-sm md:text-base">This is awesome. How do I get involved in it?</p>
                        <p className="mt-2 text-gray-500 text-sm md:text-base">
                            Just hop over to this{' '}
                            <a href="https://discord.gg/VYCCKKjnfu" target="_blank" rel="noreferrer" className="font-semibold text-primary border-primary hover:underline">
                                link
                            </a>
                            , join in on the conversation, and let us know your ideas!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
