import React from "react";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from "@mui/material/colors";
import { Divider } from "@mui/material";
import { Box } from "@mui/system";

const Input = styled('input')({
    display: 'none',
});



export default class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files: [],
            changedFileIndex: -1
        };
        this.fileUploaderRef = React.createRef();
    }

    fileUpload = (e) => {
        let changedFile = e.target.files[0];
        let uploadedFiles = e.target.files;

        if (this.state.changedFileIndex >= 0) {
            this.setState(prevState => {
                const list = [];
                prevState.files.map((file, i) => {
                    if (i === prevState.changedFileIndex)
                        list.push(changedFile);
                    else
                        list.push(file);
                });
                return {
                    files: list,
                    changedFileIndex: -1,
                };
            });
        } else if (this.state.files.length > 0) {
            this.setState(prevState => {
                return { files: [...prevState.files, ...uploadedFiles] }
            });
        } else
            this.setState({ files: [...e.target.files] });
    };

    Change(index, file) {
        console.log("Change Function");
        this.setState({ changedFileIndex: index });
        this.fileUploaderRef.current.click();
    }

    Delete(name) {
        this.setState(prevState => {
            const list = [];
            prevState.files.map((file, i) => {
                if (file.name !== name) {
                    list.push(file);
                }
            });
            return {
                files: list,
                changedFileIndex: -1,
            };
        });
    };



    render() {
        return (

            <div className="Browse">
                <th>
 
                        <ul>
                            <p className="list">ประกาศ
                                <label htmlFor="contained-button-file">
                                    <Input type="file" multiple="multiple" ref={this.fileUploaderRef} onChange={this.fileUpload} id="contained-button-file" />
                                    <Button sx={{ ml: 3, fontFamily: 'Sarabun', fontWeight:700 }} variant="text" component="span" size='small'>
                                        + อัปโหลด
                                    </Button>
                                </label></p>
                            <Divider />
                        </ul>
                
                </th>
                <Box
                    display='flex'
                    flexDirection="column"
                    justifyContent="space-evenly"
                    alignItems="stretch"
                    spacing={2}

                >
                    <table className="filesName">

                        <tbody>

                            {

                                this.state.files.map((file, i) =>
                                    <tr key={i}>
                                        <ul>
                                            <a className="list" > - </a>
                                            <a className="list" href={file.name} target="_blank"> {file.name}</a>

                                        </ul>                      
                                        <th>
                                            <Button onClick={() => this.Delete(file.name)} size="small" variant="outlined" color="error" startIcon={<DeleteIcon sx={{ color: red[500], fontFamily: 'Sarabun', fontWeight:700 }} />}>
                                                ลบ
                                            </Button>
                                        </th>

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </Box>
            </div >
        );
    }
}