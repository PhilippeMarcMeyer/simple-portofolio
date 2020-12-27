import React, { Fragment, useEffect, useState } from "react";
import { Container,Row,Col,Card } from "react-bootstrap";
import Axios from "axios";
import { Octokit } from "@octokit/rest";

export default function Projects () {

    const url = "https://api.github.com/users/kereh";
    const urlRepo = "https://api.github.com/users/kereh/repos";

    const [followers, setFollowers] = useState([]);
    const [repo, setRepo] = useState([]);
    const [following, setFollowing] = useState([]);
    const [repoInfo, setRepoInfo] = useState([]);

    useEffect(() => {
        // get Followers
        async function getFollowers() {
            const res = await Axios.get(url, {
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                    'username': 'kereh',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': 'token d4a4bfe83169e95da339a984e2e5e13cc693f8a8'
                }
            });
            const dat = await res.data;
            setFollowers(dat);
        }
        getFollowers();

        // getRepo
        async function getRepo() {
            const res = await Axios.get(url, {
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                    'username': 'kereh',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': 'token d4a4bfe83169e95da339a984e2e5e13cc693f8a8'
                }
            });
            const dat = await res.data;
            setRepo(dat);
        }
        getRepo();

        // getFollowing
        async function getFollowing() {
            const res = await Axios.get(url, {
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                    'username': 'kereh',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': 'token d4a4bfe83169e95da339a984e2e5e13cc693f8a8'
                }
            });
            const dat = await res.data;
            setFollowing(dat);
        }
        getFollowing();

        async function getRepos () {
            const res = await Axios.get(urlRepo, {
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                    'username': 'kereh',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': 'token d4a4bfe83169e95da339a984e2e5e13cc693f8a8'
                }
            });
            const dat = await res.data;
            setRepoInfo(dat);
        }
        getRepos();

    }, []);

    return (
        <Fragment>
            <Container>
                <Row>
                    <Col md="12">
                        <Card className="shadow">
                            <Card.Header className="bg-info">
                                <h4 className="text-white text-center">My Github Info</h4>
                            </Card.Header>
                            <Card.Body>
                                <Row className="text-center">
                                    <Col md="4">
                                        <h4 className="display-6">Followers</h4>
                                        <ul className="list-unstyled">
                                            <li className="display-4 text-success">
                                                {followers.followers}
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col md="4">
                                        <h4 className="display-6">Repository</h4>
                                        <ul className="list-unstyled">
                                            <li className="display-4 text-info">
                                                {repo.public_repos}
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col md="4">
                                        <h4 className="display-6">Following</h4>
                                        <ul className="list-unstyled">
                                            <li className="display-4 text-primary">
                                                {following.following}
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col md="12">
                        <Card className="shadow">
                            <Card.Header className="bg-info">
                                <h4 className="text-white text-center">My Project</h4>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md="12">
                                        {repoInfo.map(data => {
                                            return (
                                                <Card className="mb-3">
                                                    <Card.Header>
                                                        <h4>{data.name}</h4>
                                                    </Card.Header>
                                                    <Card.Body>
                                                        <p>{data.description}</p>
                                                    </Card.Body>
                                                </Card>
                                            );
                                        })}
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <style jsx>{`
            * {
                color: #757678;
            }
            `}</style>
        </Fragment>
    );
}