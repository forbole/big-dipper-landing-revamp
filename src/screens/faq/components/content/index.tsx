import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import { ContentBox } from '@components';
import { ContentType } from '../../types';
import { useStyles } from './styles';

const Content: React.FC<ContentType & ComponentDefault> = (props) => {
  const classes = useStyles();
  return (
    <ContentBox className={classnames(props.className, classes.root)}>
      {props.content.map((x) => {
        return (
          <div key={x.question} className="faq__wrapper">
            <Typography variant="h5" className="question">
              {x.question}
            </Typography>
            {React.isValidElement(x.answer) ? (
              x.answer
            ) : (
              <Typography>
                {x.answer}
              </Typography>
            )}
          </div>
        );
      })}
    </ContentBox>
  );
};

export default Content;
