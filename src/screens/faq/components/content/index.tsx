import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import { ContentBox } from '@components';

const Content: React.FC<ComponentDefault> = (props) => {
  return (
    <ContentBox className={classnames(props.className)}>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque at mauris vitae mattis. Duis ac dui non ex semper rutrum. Morbi sagittis lorem metus, consequat iaculis neque porttitor sed. Etiam magna neque, varius non pretium finibus, suscipit quis nulla. Ut nulla nisl, pellentesque imperdiet commodo quis, suscipit vitae nulla. Nam pretium eget leo sed porttitor. Nam et odio purus. Sed iaculis at est at bibendum.

        Mauris viverra rhoncus pellentesque. Sed vitae ultricies justo. Mauris nisl ipsum, semper vel tristique interdum, vehicula a ipsum. Vestibulum in ex vehicula, fermentum mauris et, hendrerit urna. Nunc id sem aliquet, pulvinar metus et, euismod nibh. Pellentesque commodo consequat iaculis. Nam id mi nec massa pellentesque mattis sit amet ut justo. Vestibulum egestas ultricies mauris, quis laoreet eros accumsan ut. Fusce porttitor pellentesque tortor a rutrum.

        Praesent ante neque, auctor sed ligula a, dictum volutpat elit. Nullam bibendum velit libero, id vehicula risus tempor sed. Vivamus fringilla neque consequat nisi lacinia, at scelerisque nisi scelerisque. Phasellus vestibulum orci in dui ultrices, eget pretium arcu auctor. Praesent dictum lorem quis ante congue laoreet. Cras id fermentum lacus, et ultrices diam. Etiam pellentesque pharetra risus nec ornare. Nullam non metus sem. Sed semper in urna ut viverra. Donec eget dui porta, vestibulum nulla non, iaculis turpis. Phasellus tempus ex in porta interdum. Nulla facilisi. Cras vitae nibh tellus. Etiam pretium magna nulla, in feugiat sem venenatis imperdiet. Nunc turpis magna, fermentum a faucibus quis, tincidunt non purus. Cras ultricies eros id odio laoreet euismod.
      </Typography>
    </ContentBox>
  );
};

export default Content;
