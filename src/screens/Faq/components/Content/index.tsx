import Typography from "@mui/material/Typography";
import type { ComponentProps, FC } from "react";

import { ContentBox } from "@/src/components";

import type { ContentType } from "./types";
import useStyles from "./useStyles";

const Content: FC<ContentType & ComponentProps<typeof ContentBox>> = ({
  content,
  ...props
}) => {
  const styles = useStyles();

  return (
    <ContentBox {...props} css={styles.root}>
      {content.map((x) => (
        <div className="faqcontent__wrapper" key={x.question}>
          <Typography className="faqcontent__question" variant="h5">
            {x.question}
          </Typography>
          <Typography>{x.answer}</Typography>
          {!!x.list && (
            <div className="faqcontent__list">
              {x.list.map((item) => (
                <div className="faqcontent__list-item" key={item.title}>
                  <Typography className="faqcontent__list-title" variant="h5">
                    <span className="faqcontent__list-title-bullet">
                      &#x2022;
                    </span>{" "}
                    {item.title}:
                  </Typography>
                  <Typography>{item.description}</Typography>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </ContentBox>
  );
};

export default Content;
