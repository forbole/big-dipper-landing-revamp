import Typography from "@mui/material/Typography";
import { ComponentProps, FC } from "react";
import useStyles from "./useStyles";
import type { ContentType } from "./types";
import { ContentBox } from "@/src/components";

const Content: FC<ContentType & ComponentProps<typeof ContentBox>> = ({
  content,
  ...props
}) => {
  const styles = useStyles();
  return (
    <ContentBox {...props} css={styles.root}>
      {content.map((x) => {
        return (
          <div key={x.question} className="faqcontent__wrapper">
            <Typography variant="h5" className="faqcontent__question">
              {x.question}
            </Typography>
            <Typography>{x.answer}</Typography>
            {!!x.list && (
              <div className="faqcontent__list">
                {x.list.map((item) => {
                  return (
                    <div key={item.title} className="faqcontent__list-item">
                      <Typography
                        variant="h5"
                        className="faqcontent__list-title"
                      >
                        <span className="faqcontent__list-title-bullet">
                          &#x2022;
                        </span>{" "}
                        {item.title}:
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
    </ContentBox>
  );
};

export default Content;
