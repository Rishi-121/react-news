import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Link,
  CircularProgress,
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import moment from "moment";
import { connect } from "react-redux";
import { handlerClicked } from "../../redux/actions";
import Masonry from "react-masonry-css";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  error: {
    padding: theme.spacing(6),
  },
  spinner: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(6),
  },
  card: {
    display: "flex",
    flexDirection: "column",
    boxShadow:
      "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
    borderRadius: 7,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  pagination: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

const size = 21;

const NewsCard = (props) => {
  const classes = useStyles();

  const [page, setPage] = useState(1);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    props.handlerClicked(props.section, page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    setPage(1);
  }, [props.section]);

  return (
    <Container className={classes.cardGrid}>
      {props.error ? (
        <Typography
          variant="h4"
          color="textSecondary"
          align="center"
          className={classes.error}
        >
          Oops! Unable to Fetch
        </Typography>
      ) : props.loading ? (
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      ) : (
        <>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {props.newsData.map((article, index) => (
              <div key={index}>
                <Card className={classes.card}>
                  <CardHeader
                    subheader={`${article.author || "Anonymous"} / ${moment(
                      article.publishedAt
                    ).format("llll")}`}
                  />
                  <Link href={article.url}>
                    <CardMedia
                      className={classes.media}
                      image={article.urlToImage || `https://picsum.photos/500`}
                      title={article.title}
                    />
                  </Link>
                  <CardContent className={classes.cardContent}>
                    <Typography component={Link} href={article.url}>
                      {article.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      style={{ marginTop: 10 }}
                    >
                      {article.description}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Masonry>
          <div className={classes.pagination}>
            <Pagination
              count={Math.ceil(props.count / size)}
              page={page}
              onChange={handlePageChange}
            />
          </div>
        </>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.newsReducer.loading,
    section: state.newsReducer.section,
    newsData: state.newsReducer.newsData,
    count: state.newsReducer.count,
    error: state.newsReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlerClicked: (section, page) => dispatch(handlerClicked(section, page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsCard);
