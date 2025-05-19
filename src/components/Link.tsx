import { ArrowUpRight } from 'lucide-react';
import { css } from '../../styled-system/css';
import { Flex } from '../../styled-system/jsx';

export const Link = ({
  target,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Flex
      display="inline-flex"
      gap="0.5"
      align="center"
      className={css({
        fontSize: 'sm',
        color: 'neutral.700',
        textDecoration: 'underline',
        transition: 'all 0.275s ease',

        _hover: {
          color: 'neutral.500',
        },
      })}
    >
      <a target={target} {...rest} />
      {target === '_blank' && <ArrowUpRight size={14} />}
    </Flex>
  );
};
