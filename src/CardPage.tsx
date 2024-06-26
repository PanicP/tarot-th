import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Image,
} from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
import { colors } from './color'
import { useMemo } from 'react'
import data from './data.json'

import Card0 from './assets/card/0.jpg'

type CardData = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
}

// const cardTopics = [
//     'habit',
//     'general',
//     'other',
//     'caution',
//     'work',
//     'job',
//     'financial',
//     'love',
//     'marriage',
//     'children',
//     'health',
// ]
export const CardPage = () => {
    const location = useLocation()
    const id = location.pathname.split('/').pop()

    const cardData: CardData = useMemo(
        () => data?.find((card) => card.id === Number(id)) || {},
        [id]
    )

    // const cardDetails = useMemo(
    //     () =>
    // )

    return (
        <Flex
            flexDir="column"
            align="center"
            minH={'100vh'}
            bgColor={colors.darkbrown}
            gap={4}
        >
            {/* Home */}
            <Link to="/tarot-th/">
                <Flex color={colors.lightblue}>Home</Flex>
            </Link>
            <Flex>
                {/* Left Panel */}
                <Flex flex={1} color={colors.pink} flexDir="column">
                    <Image src={Card0} />
                    {/* Card Name */}
                    <Flex
                        justify="center"
                        color={colors.lightblue}
                        fontSize="4xl"
                    >
                        {cardData.name}
                    </Flex>
                </Flex>
                {/* Right Panel */}
                <Flex
                    flex={1}
                    flexDir="column"
                    align="center"
                    gap={4}
                    minW="80vw"
                    color={colors.pink}
                >
                    <Accordion defaultIndex={[0]} allowMultiple minWidth="100%">
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex="1" textAlign="left">
                                        Section 1 title
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex="1" textAlign="left">
                                        Section 2 title
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Flex>
            </Flex>
        </Flex>
    )
}
