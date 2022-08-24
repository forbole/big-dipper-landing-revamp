import { FC, HTMLAttributes } from 'react';
import { Typography } from '@mui/material';
import { ContentType } from '../../types';
import { StyledContentBox } from './styles';

const Content: FC<ContentType & HTMLAttributes<HTMLElement>> = ({ className, content }) => {
  return (
    <StyledContentBox className={className}>
      {content.map((x) => {
        return (
          <div key={x.question} className="faq__wrapper">
            <Typography variant="h5" className="question">
              {x.question}
            </Typography>
            <Typography>{x.answer}</Typography>
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
                      <Typography>{item.description}</Typography>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </StyledContentBox>
  );
};

export default Content;
