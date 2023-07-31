import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";

const id = 1;
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Character() {
  const { data, error } = useSWR(`https://swapi.dev/api/people/${id}`, fetcher);

  if (error) {
    return <div>Error fetching data</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
