import {
  Article,
  Button,
  Div,
  H3,
  P,
  Section,
  Span,
  Strong,
} from '@stylin.js/elements';
import { FC } from 'react';

import Memes from '../memes';
import CardBorder from '../svg/card-border';

const Content: FC = () => (
  <Div minHeight="100vh" mt="8rem" p="3rem">
    <Section
      mx="auto"
      gap="2rem"
      display="grid"
      maxWidth="69rem"
      gridTemplateColumns="1fr 1fr"
    >
      <Article position="relative">
        <Div inset="0" display="flex" position="absolute" alignItems="stretch">
          <CardBorder />
        </Div>
        <Div
          m="1rem"
          p="2rem"
          gap="2rem"
          display="flex"
          borderRadius="0.75rem"
          flexDirection="column"
          backdropFilter="blur(30px)"
          background="linear-gradient(86.16deg, rgba(255, 255, 255, 0.3) 11.14%, rgba(255, 255, 255, 0.1) 113.29%)"
        >
          <H3 color="#9FECFE" fontSize="2.25rem">
            MOVE CREATOR
          </H3>
          <P fontSize="1.25rem" lineHeight="2rem" color="#ffffff">
            A Tribute to the One True Move God - Sam {'"Big Brain"'} Blackshear!
            Tired of impostors claiming {"Sam's"} throne as the master of the
            Move programming language? So are we! Move Creator is here to keep
            {"Sam's"} legacy intact and stop any wannabe-Craig Wrights from
            stealing the spotlight.
          </P>
          <P fontSize="1.25rem" color="#ffffff" lineHeight="2rem">
            {"Who's"} behind this? Just a bunch of Sui chads on a mission to
            protect {"Sam's"} reign, while having a blast doing it.
          </P>
          <Button
            all="unset"
            py="1rem"
            px="6rem"
            bg="#9FECFE"
            cursor="pointer"
            fontWeight="600"
            justifySelf="end"
            alignSelf="center"
            borderRadius="0.625rem"
          >
            Buy now
          </Button>
        </Div>
      </Article>
      <Article position="relative">
        <Div inset="0" display="flex" position="absolute" alignItems="stretch">
          <CardBorder />
        </Div>
        <Div
          m="1rem"
          p="2rem"
          gap="2rem"
          display="flex"
          borderRadius="0.75rem"
          flexDirection="column"
          backdropFilter="blur(20px)"
          background="linear-gradient(86.16deg, rgba(255, 255, 255, 0.3) 11.14%, rgba(255, 255, 255, 0.1) 113.29%)"
        >
          <H3 color="#9FECFE" fontSize="2.25rem">
            TOKENOMICS
          </H3>
          <P fontSize="1.25rem" lineHeight="2rem" color="#ffffff">
            Ticker: $MOVE
          </P>
          <P fontSize="1.25rem" lineHeight="2rem" color="#ffffff">
            Supply: 1.000.000.000
          </P>
          <P display="flex" gap="1rem" alignItems="center">
            <Strong color="#9FECFC" fontSize="2.25rem">
              50%
            </Strong>
            <Span fontSize="1.25rem" lineHeight="2rem" color="#ffffff">
              Initial Liquidity
            </Span>
          </P>
          <P display="flex" gap="1rem" alignItems="center">
            <Strong color="#9FECFC" fontSize="2.25rem">
              40%
            </Strong>
            <Span fontSize="1.25rem" lineHeight="2rem" color="#ffffff">
              Sent to sam@stashed (Sam Blackshear’s Stashed Subname)
            </Span>
          </P>
          <P display="flex" gap="1rem" alignItems="center">
            <Strong color="#9FECFC" fontSize="2.25rem">
              10%
            </Strong>
            <Span fontSize="1.25rem" lineHeight="2rem" color="#ffffff">
              Team and Operational Costs. (Locked for 6 months.)
            </Span>
          </P>
          <Button
            all="unset"
            py="1rem"
            px="6rem"
            bg="#9FECFE"
            cursor="pointer"
            fontWeight="600"
            justifySelf="end"
            alignSelf="center"
            borderRadius="0.625rem"
          >
            Buy now
          </Button>
        </Div>
      </Article>
    </Section>
    <Section my="2rem" opacity="0.6">
      <Memes />
    </Section>
  </Div>
);

export default Content;
