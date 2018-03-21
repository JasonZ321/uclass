import React, {Component} from 'react';
import Chip from 'material-ui/Chip';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class CourseCategorySelectField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: []
        };
        this.styles = {
            chip: {
                margin: 4,
            },
            wrapper: {
                display: 'flex',
                flexWrap: 'wrap',
            },
        };
    }
    handleChange = (event, index, value) => {
        if(this.state.selected.indexOf(value) < 0) {
            this.props.onSelectCategories([...this.state.selected, value]);
            this.setState({
                selected: [...this.state.selected, value]
            });
        }
    }
    handleRequestDelete = (id) => {
        const {selected} = this.state;
        const toDelete = selected.map((select) => select._id).indexOf(id);
        selected.splice(toDelete, 1);
        this.setState({selected: selected});
    };
    renderChip(category) {
        return (
          <Chip
            key={category._id}
            onRequestDelete={() => this.handleRequestDelete(category._id)}
            style={this.styles.chip}
          >
            {category.name}
          </Chip>
        );
      }
    render() {
        const { categories } = this.props;
        return <div>
             <SelectField
                floatingLabelText="Frequency"
                value={this.state.value}
                onChange={this.handleChange}
                >
                {
                    categories ? 
                        categories.map(category => <MenuItem key={category._id} value={category} primaryText={category.name}/>)
                        :
                        <div></div>
                }
            </SelectField>
            <div style={this.styles.wrapper}>
                {this.state.selected.map(this.renderChip, this)}
            </div>
         </div>
     }
}