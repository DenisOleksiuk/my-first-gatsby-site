import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
`;

export const Title = styled.div`
  display: flex;
  width: 30%;
  height: 70px;
  background-color: #1a54e7;
  justify-content: flex-end;
  align-items: center;
`;

export const TextTitle = styled.div`
  font-family: 'PT Sans';
  font-size: 24px;
  line-height: 36px;
  font-weight: 400;
  color: #ffffff;
  font-weight: 700;
  margin-right: 35px;
`;

export const IconWrapper = styled.div`
  width: 60px;
  height: 69px;
  background-color: #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Navigation = styled.nav`
  margin-left: 26px;
  margin-right: 133px;
`;

export const Ul = styled.ul`
  display: flex;
  padding: 0;
`;

export const NavLink = styled(Link)`
  display: flex;
  font-family: 'PT Sans';
  font-size: 18px;
  line-height: 36px;
  font-weight: 400;
  color: #b2b2b2;
  text-decoration: none;
`;

export const PostLink = styled(NavLink)`
  color: #1a54e7;
`;

export const Lists = styled.li`
  list-style: none;
  margin-right: 10px;
  color: ${(props) => (props.active ? 'red' : 'black')};
`;
