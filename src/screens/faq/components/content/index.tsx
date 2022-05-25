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
            <Typography>
              {x.answer}
            </Typography>
            {!!x.list && (
              <div className="list">
                {x.list.map((item) => {
                  return (
                    <div key={item.title} className="list__item">
                      <Typography variant="h5" className="list__title">
                        <span className="list__title--bullet">&#x2022;</span>
                        {' '}
                        {item.title}
                        :
                      </Typography>
                      <Typography>
                        {item.description}
                      </Typography>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </ContentBox>
  );
};

export default Content;
