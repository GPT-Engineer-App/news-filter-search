import { useState } from "react";
import { Box, Input, InputGroup, InputLeftElement, VStack, Text, Image, Heading, Button, Stack, Container, Divider } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const articlesData = [
  {
    id: 1,
    title: "Global Warming: An Inconvenient Truth",
    ingress: "Exploring the impact of global warming on our planet.",
    content: "Global warming is the long-term heating of Earth's climate system observed since the pre-industrial period (between 1850 and 1900) due to human activities, primarily fossil fuel burning, which increases heat-trapping greenhouse gas levels in Earth's atmosphere.",
    imageUrl: "https://images.unsplash.com/photo-1461880234904-751a2f54f1c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjB3YXJtaW5nfGVufDB8fHx8MTcxMzQyOTIyNnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    title: "The Rise of Electric Vehicles",
    ingress: "How electric vehicles are shaping the future of transportation.",
    content: "Electric vehicles (EVs) are seen as a key technology to reduce greenhouse gas emissions and other pollutants. The rise of EVs, however, depends on improvements in battery technology and the availability of charging infrastructure.",
    imageUrl: "https://images.unsplash.com/photo-1692600409678-df2024a29af1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGVzfGVufDB8fHx8MTcxMzQyOTIyN3ww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    title: "The Future of Artificial Intelligence",
    ingress: "What the next decade holds for AI technology.",
    content: "Artificial Intelligence (AI) continues to advance at a rapid pace, with implications across all sectors of society. From healthcare to finance, AI technologies are transforming industries by enabling new levels of efficiency and personalization.",
    imageUrl: "https://images.unsplash.com/photo-1712847332449-3791c8810949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTcxMzQyOTIyN3ww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArticles, setFilteredArticles] = useState(articlesData);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = articlesData.filter((article) => article.title.toLowerCase().includes(query) || article.ingress.toLowerCase().includes(query) || article.content.toLowerCase().includes(query));
    setFilteredArticles(filtered);
  };

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={4} align="stretch">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <FaSearch />
          </InputLeftElement>
          <Input placeholder="Search articles..." value={searchQuery} onChange={handleSearch} />
        </InputGroup>
        <Stack spacing={8}>
          {filteredArticles.map((article) => (
            <Box key={article.id} p={5} shadow="md" borderWidth="1px">
              <Image src={article.imageUrl} alt={article.title} borderRadius="md" />
              <Heading fontSize="xl" mt={4}>
                {article.title}
              </Heading>
              <Text mt={4} color="gray.600">
                {article.ingress}
              </Text>
              <Divider my={4} />
              <Text mt={4}>{article.content}</Text>
            </Box>
          ))}
        </Stack>
      </VStack>
    </Container>
  );
};

export default Index;
