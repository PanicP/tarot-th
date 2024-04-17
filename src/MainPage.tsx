import { Flex } from '@chakra-ui/react'
import data from './data.json'
import { colors } from './color'
import { intToRoman } from './helpers'

export const MainPage = () => {
    return (
        <Flex
            flexDir="column"
            align="center"
            minh={'100vh'}
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
                        width="100%"
                        justify="center"
                        color={colors.pink}
                        fontSize="2xl"
                        gap={10}
                        borderRadius={10}
                        _hover={{
                            bgColor: colors.brown,
                            cursor: 'pointer',
                        }}
                        _active={{
                            bgColor: colors.brown,
                        }}
                        onClick={() =>
                            window.open(
                                '/card/' + card.id,
                                '_blank',
                                'rel=noopener noreferrer'
                            )
                        }
                    >
                        <Flex>{intToRoman(card.id)}</Flex>
                        <Flex>{card.name}</Flex>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    )
}
