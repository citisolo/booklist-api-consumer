import React from 'react';
import { Label, Icon } from 'semantic-ui-react';

const FilterList = ({ list, removeFilter } ) => {  
    return(
        <div>
            {
                list.map((item, index) => {
                    return (
                        <Label key={index} image>
                            { item.values }
                            <Icon name='delete' onClick={() => removeFilter(index)}/>
                        </Label>
                    )
                })
            }
        </div>
    )
}

export default FilterList;