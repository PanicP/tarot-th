import { Flex } from '@chakra-ui/react'
import data from './data.json'
import { colors } from './color'
import { intToRoman } from './helpers'
import { useNavigate } from 'react-router-dom'

export const MainPage = () => {
    const nav = useNavigate()
    return (
        <Flex
            flexDir="column"
            align="center"
            h={'100vh'}
            bgColor={colors.darkbrown}
            gap={4}
        >
            <Flex color={colors.lightblue} fontSize="4xl">
                Tarot ต้วน
            </Flex>
            <Flex flexDir="column" align="center" gap={4} minW="80vw">
                {data.map((card) => (
                    <Flex
                        key={card.id}
                        color={colors.pink}
                        fontSize="2xl"
                        gap={10}
                        _hover={{
                            bgColor: colors.brown,
                        }}
                        onClick={() => nav(`/card/${card.id}`)}
                    >
                        <Flex>{intToRoman(card.id)}</Flex>
                        <Flex>{card.name}</Flex>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    )
}
