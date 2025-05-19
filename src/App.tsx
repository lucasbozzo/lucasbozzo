import { Flex } from '../styled-system/jsx';
import { css } from '../styled-system/css';
import { CircleAlert } from 'lucide-react';
import { Avatar } from '@base-ui-components/react';
import { Link } from './components/Link';

function App() {
  return (
    <Flex
      maxWidth="prose"
      marginX="auto"
      height="dvh"
      align="center"
      justify="center"
    >
      <Flex
        inset="0"
        paddingBottom="20"
        paddingTop="5"
        paddingX="4"
        direction="column"
        gap="8"
      >
        <Avatar.Root
          className={css({
            display: 'inline-flex',
            justifyContent: 'center',
            verticalAlign: 'middle',
            borderRadius: 'full',
            userSelect: 'none',
            backgroundColor: 'neutral.200',
            overflow: 'hidden',
            width: '28',
            height: '28',
          })}
        >
          <Avatar.Image
            src="https://avatars.githubusercontent.com/u/6489448?v=4"
            className={css({
              width: 'full',
              height: 'full',
              objectFit: 'contain',
            })}
          />
          <Avatar.Fallback
            className={css({
              display: 'flex',
              width: 'full',
              height: 'full',
              alignItems: 'center',
              justifyContent: 'center',
            })}
          >
            LB
          </Avatar.Fallback>
        </Avatar.Root>
        <Flex direction="column" gap="2">
          <h1 className={css({ fontWeight: 'bold' })}>Lucas Bozzo</h1>
          <p className={css({ color: 'neutral.600', fontSize: 'sm' })}>
            Senior Frontend Engineer based in London. Currently working at{' '}
            <Link target="_blank" href="https://www.landytech.com/">
              Landytech
            </Link>
          </p>
        </Flex>
        <Flex
          backgroundColor="neutral.100"
          borderRadius="sm"
          paddingY="0.5"
          paddingX="1"
          gap="1"
          borderWidth="1"
          borderStyle="solid"
          borderColor="neutral.200"
          align="center"
        >
          <CircleAlert size="12" className={css({ color: 'neutral.600' })} />
          <span className={css({ fontSize: 'xs', color: 'neutral.600' })}>
            More details soon to come!
          </span>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
