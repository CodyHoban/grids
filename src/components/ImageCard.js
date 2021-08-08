import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.image);
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const width = this.imageRef.current.clientWidth;

    const spans = Math.ceil(height / 6);

    //const widthSpans = Math.ceil(width / 10);

    this.setState({ spans });
  };

  render() {
    const { description, urls, tags, alt_description } = this.props.image;
    return (
      <Card 
        // background_color="gray" 
        // style={{ 
        //   gridRowEnd: `span ${this.state.spans}`,
        //   width: '250px',
        //   //gridColumnEnd: `span ${this.state.widthSpans}`
        // }}
      >
        <CardActionArea>
          <CardMedia>
            <img 
              ref={this.imageRef}
              alt={description} 
              src={urls.regular}
              title={alt_description}
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {tags[1].title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {alt_description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="contianed" color="secondary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default ImageCard;