import React from 'react';
import { Typography } from '@material-ui/core';
import {
  Layout,
  SectionBox,
  SectionLimit,
  ContentBox,
} from '@components';
import { useStyles } from './styles';

const About = () => {
  const classes = useStyles();
  return (
    <Layout>
      <SectionBox main>
        <SectionLimit className={classes.root}>
          <Typography className="title" variant="h2">About</Typography>
          <ContentBox>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate turpis nisi, in viverra est egestas eget. Phasellus non efficitur orci, ut ornare est. Quisque dolor augue, pharetra a vehicula consectetur, facilisis sed dolor. Duis at lacus purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam accumsan sit amet mauris et ultrices. Morbi blandit laoreet nisi, ac ultricies velit ultrices id.
            </Typography>
            <Typography>
              Donec ut lorem in quam imperdiet ultrices. Pellentesque sed vehicula arcu, vitae auctor nisi. Fusce vestibulum consequat malesuada. Suspendisse pharetra sollicitudin bibendum. Quisque luctus nibh dolor. In hac habitasse platea dictumst. Vivamus varius purus nec ornare maximus. Mauris eget nisl posuere nibh malesuada lobortis. Sed augue sapien, dignissim non ipsum eget, tempus fringilla turpis. Fusce venenatis sit amet dolor vestibulum pharetra. Aenean tortor nunc, egestas in dictum sed, elementum quis neque. Donec augue purus, bibendum ut ipsum nec, cursus pretium erat. Proin scelerisque bibendum nisi vel ultrices. Nullam dignissim sem nec libero pulvinar sodales.
            </Typography>
            <Typography>
              Praesent facilisis facilisis nisl in pulvinar. Maecenas fringilla convallis odio eu aliquam. In hac habitasse platea dictumst. Etiam faucibus leo at lectus congue, sit amet condimentum elit vulputate. Phasellus non sem neque. Pellentesque at tincidunt leo. Curabitur fringilla nulla eu nunc consectetur, eget fringilla ante blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            </Typography>
            <Typography>
              Proin mauris eros, pellentesque id ipsum a, venenatis ultrices est. Quisque a eros et augue auctor maximus id ac augue. Phasellus in ultrices nisi, id pellentesque lorem. Cras porta nulla dolor, id molestie velit vestibulum et. Integer tellus ipsum, blandit vel libero eget, pretium pharetra nisi. Fusce ultrices nunc et ligula fringilla tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc ullamcorper justo diam, ac posuere enim semper et. Etiam non eros facilisis, pellentesque massa eget, imperdiet dui. Suspendisse potenti.
            </Typography>
            <Typography>
              Phasellus finibus quam sit amet neque ultrices faucibus. Nam at tincidunt nisi. Aliquam bibendum metus quis enim fermentum maximus. Aliquam tellus arcu, blandit sed hendrerit quis, lobortis ac velit. Vivamus vel fermentum quam, vitae laoreet velit. Vivamus ipsum lorem, gravida condimentum viverra et, porttitor vitae mauris. Nullam porttitor vulputate nulla in semper. Mauris vitae lacinia dolor, eget congue ligula. In id feugiat augue.
            </Typography>
          </ContentBox>
        </SectionLimit>
      </SectionBox>
    </Layout>
  );
};

export default About;
