import { useState } from 'react';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        height: '40px',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchBar(props) {

    const { type, setType, setSearchUrl } = props
    const [searchText, setSearchText] = useState('')

    const handleChange = (event) => {
        setType(event.target.value);
    };

    const handleTextChange = (event) => {
        setSearchText(event.target.value)
    }

    const commenceSearch = () => {
        if(searchText === ''){
            return
        }
        setSearchUrl(`/api/order/${type}/${searchText}`)
    }

    return (
        <div style={{ display: 'flex', padding: 10 }}>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    onChange={handleTextChange}
                    value={searchText}
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type}
                    label="Search By"
                    onChange={handleChange}
                >
                    <MenuItem value={'fullname'}>Full Name</MenuItem>
                    <MenuItem value={'firstname'}>First Name</MenuItem>
                    <MenuItem value={'lastname'}>Last Name</MenuItem>
                    <MenuItem value={'email'}>Email</MenuItem>
                    <MenuItem value={'mobile'}>Mobile</MenuItem>
                </Select>
            </FormControl>
            <Button style={{marginLeft:"70px", height:"40px", alignSelf:"center"}} variant="contained" onClick={commenceSearch}>Search</Button>
        </div>

    );
}