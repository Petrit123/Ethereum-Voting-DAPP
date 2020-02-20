import React, { Component } from 'react';
import {Table} from 'reactstrap';


export class ShowVotes extends Component{
    handleChange=(candidate)=>{
        let _candidate=candidate;
        this.props.vote(_candidate)
    }

    render(){
        let candidateList=this.props.candidates.map((candidate,i)=>
        <tr key={i}>
            <td onClick={this.handleChange.bind(this,candidate.name)}>{candidate.name}</td>
            <td>2019 Student Union Election</td>
            <td>{candidate.rating}</td>
            <td>{candidate.creationTime}</td>
        </tr>)

        return(
            <div>
            <h3> Student union election 2019</h3>
            <hr />
            <Table>
                <tbody>
                    <tr>
                        <th scope="row">Candidate</th>
                        <th scope="row">Title</th>
                        <th scope="row">Voting Numbers</th> 
                        <th scope="row">Created Time</th>
                    </tr>
                    {candidateList}
                </tbody>
            </Table>
            <p class="copyright">© Petrit Krasniqi 2019</p>
          </div>
        )
    } 
}

export default ShowVotes;