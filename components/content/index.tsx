import {
  Article,
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
  <Div minHeight="100vh" mt="3rem" pt="8rem" id="memes">
    <Section
      mx="auto"
      gap="2rem"
      display="grid"
      maxWidth="69rem"
      p={['1rem', '3rem']}
      gridTemplateColumns={['1fr', '1fr', '1fr', '1fr 1fr']}
    >
      <Article
        position="relative"
        width={['calc(100% - 2rem)', 'calc(100% - 2rem)', 'unset']}
      >
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
          height="calc(100% - 2rem)"
          backdropFilter="blur(30px)"
          background="linear-gradient(86.16deg, #aaa5 11.14%, #8883 113.29%)"
        >
          <H3 color="#9FECFE" fontSize="2.25rem">
            MOVE CREATOR
          </H3>
          <P
            color="#ffffff"
            lineHeight="2rem"
            fontSize="1.25rem"
            textAlign="justify"
            textJustify="inter-character"
          >
            A Tribute to the One True Move God - Sam {'"Big Brain"'} Blackshear!
            Tired of impostors claiming {"Sam's"} throne as the master of the
            Move programming language? So are we! Move Creator is here to keep
            {" Sam's"} legacy intact and stop any wannabe-Craig Wrights from
            stealing the spotlight.
          </P>
          <P
            color="#ffffff"
            lineHeight="2rem"
            fontSize="1.25rem"
            textAlign="justify"
            textJustify="inter-character"
          >
            {"Who's"} behind this? Just a bunch of Sui chads on a mission to
            protect {"Sam's"} reign, while having a blast doing it.
          </P>
        </Div>
      </Article>
      <Article
        position="relative"
        width={['calc(100% - 2rem)', 'calc(100% - 2rem)', 'unset']}
      >
        <Div inset="0" display="flex" position="absolute" alignItems="stretch">
          <CardBorder />
        </Div>
        <Div
          m="1rem"
          p="2rem"
          bg="#0006"
          gap="2rem"
          display="flex"
          borderRadius="0.75rem"
          flexDirection="column"
          height="calc(100% - 2rem)"
          backdropFilter="blur(30px)"
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
          <P
            display="flex"
            gap={['0.25rem', '0.25rem', '1rem']}
            flexDirection={['column', 'column', 'row']}
            alignItems={['flex-start', 'flex-start', 'center']}
          >
            <Strong color="#9FECFC" fontSize="2.25rem">
              50%
            </Strong>
            <Span fontSize="1.25rem" lineHeight="2rem" color="#ffffff">
              Initial Liquidity
            </Span>
          </P>
          <P
            display="flex"
            gap={['0.25rem', '0.25rem', '1rem']}
            flexDirection={['column', 'column', 'row']}
            alignItems={['flex-start', 'flex-start', 'center']}
          >
            <Strong color="#9FECFC" fontSize="2.25rem">
              40%
            </Strong>
            <Span fontSize="1.25rem" lineHeight="2rem" color="#ffffff">
              Sent to sam@stashed (Sam Blackshear’s Stashed Subname)
            </Span>
          </P>
          <P
            display="flex"
            gap={['0.25rem', '0.25rem', '1rem']}
            flexDirection={['column', 'column', 'row']}
            alignItems={['flex-start', 'flex-start', 'center']}
          >
            <Strong color="#9FECFC" fontSize="2.25rem">
              10%
            </Strong>
            <Span fontSize="1.25rem" lineHeight="2rem" color="#ffffff">
              Team and Operational Costs. (Locked for 6 months.)
            </Span>
          </P>
        </Div>
      </Article>
    </Section>
    <Section py="3rem">
      <Memes />
    </Section>
  </Div>
);

export default Content;
