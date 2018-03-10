import React, {Component} from 'react'
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField'

const CourseCategoryAutoCompleteField = ({categories, onChange}) => {
    const data = categories ? categories.map(category => category.name) : [];
    return <div>
            <AutoComplete
                floatingLabelText="分类"
                filter={AutoComplete.noFilter}
                openOnFocus={true}
                dataSource={data}
                onUpdateInput={onChange}
            />
        </div>
}

export default CourseCategoryAutoCompleteField;