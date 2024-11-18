import { DescriptionCard } from "../../components/DescriptionCard";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { DetailProvider } from "../../contexts/DetailContext";

export function Details() {
  return (
    <DetailProvider>
      <Header />
      <DescriptionCard />
      <Footer />
    </DetailProvider>
  );
}
