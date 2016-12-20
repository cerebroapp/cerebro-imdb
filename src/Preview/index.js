const React = require('react');
const Film = require('./Film');
const { getFilm } = require('../api');

module.exports = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }
  componentDidMount() {
    const { id } = this.props;
    getFilm(id).then(data => this.setState({ data }))
  }
  render() {
    const { data } = this.state;
    return data ? <Film {...data} /> : null;
  }
}
