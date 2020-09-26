import * as React from 'react'
import { Searchbar } from 'react-native-paper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('')

  const onChangeSearch = query => setSearchQuery(query)

  return (
    <Searchbar
      icon={() => <MaterialIcons name="card-search-outline" size={30} />}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  )
}

export default SearchBar
