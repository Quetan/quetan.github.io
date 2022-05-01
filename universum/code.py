# from __future__ import annotations
# from dataclasses import dataclass

# @dataclass
# class Edge:
#     u: int  # вершина "откуда"
#     v: int  # вершина "куда"

#     def reversed(self) -> Edge:
#         return Edge(self.v, self.u)

#     def __str__(self) -> str:
#         return f"{self.u} -> {self.v}"

# from typing import TypeVar, Generic, List, Optional
# from edge import Edge

# V = TypeVar('V') # тип вершин графа

# class Graph(Generic[V]):
#     def __init__(self, verticles: List[V] = []) -> None:
#         self._verticles: List[V] = verticles
#         self._edges: List[List[Edge]] = [[] for _ in verticles]


# @property
# def vertex_count(self) -> int:
#     return len(self ._vertices)  # Количество вершин

# @property
# def edge_count(self) -> int:
#     return sum(map(len, self._edges))  # Количество ребер

# # Добавляем вершину в граф и возвращаем ее индекс
# def add_vertex(self, vertex: V) -> int:
#     self._vertices.append(vertex)
#     self._edges.append([])  # Добавляем пустой список для ребер
#     return self.vertex_count - 1  # Возвращаем индекс по добавленным вершинам

# # Это ненаправленный граф,
# # поэтому мы всегда добавляем вершины в обоих направлениях
# def add_edge(self, edge: Edge) -> None:
#     self._edges[edge.u].append(edge)
#     self._edges[edge.v].append(edge.reversed())

# # Добавляем ребро, используя индексы вершин (удобный метод)
# def add_edge_by_indices(self, u: int, v: int) -> None:
#     edge: Edge = Edge(u, v)
#     self.add_edge(edge)

# # Добавляем ребро, просматривая индексы вершин (удобный метод)
# def add_edge_by_vertices(self, first: v, second: V) -> None:
#     u: int = self._vertices.index(first)
#     v: int = self._vertices.index(second)
#     self.add_edge_by_indices(u, v)

# # Поиск вершины по индексу
# def vertex_at(self, index: int) -> V:
#     return self._vertices[index]

# # Поиск индекса Вершины в графе
# def index_of(self, vertex: V) -> int:
#     return self ._vertices.index(vertex)

# # Поиск Вершин, с которыми связана Вершина с заданным индексом
# def neighbors_for_index(self, index: int) -> List[V]:
#     return list(map(self.vertex_at, [e.v for е in self._edges[index]]))

# # Поиск индекса Вершины; бозбращает ее соседей (удобный метод)
# def neighbors_for_vertex(self, vertex: V) -> List[V]:
#     return self.neighbors_for_index(self.index_of(vertex))

# # Возвращает все ребра, связанные с Вершиной, имеющей заданный индекс
# def edges_for_index(self, index: int) -> List[Edge]:
#     return self._edges[index]

# # Поиск индекса Вершины; бозбращает ее ребра (удобный метод)
# def edges_for_vertex(self, vertex: V) -> List[Edge]:
#     return self.edges_for_index(self.index_of(vertex))

# # Упрощенный красивый быбод графа
# def __str__(self) -> str:
#     desc: str = '"'
#     for i in range(self.vertex_count):
#         desc += f"{self.vertex_at(i)} -> {self.neighbors_for_index(i)}\n"
#     return desc

# if __name__ == "_main_":
#     # тест простейшей графобой конструкции
#     city_graph: Graph[str] = Graph(["Seattle", "San Francisco", "Los Angeles", "Riverside", "Phoenix", "Chicago", "Boston", "New Vork", "Atlanta", "Miami", "Dallas", "Houston", "Detroit", "Philadelphia", "Washington"])
#     city_graph.add_edge_by_vertices("Seattle", "Chicago")
#     city_graph.add_edge_by_vertices("Seattle", "San Francisco")
#     city_graph.add_edge_by_vertices("San Francisco", "Riverside")
#     city_graph.add_edge_by_vertices("San Francisco", "Los Angeles")
#     city_graph.add_edge_by_vertices("Los Angeles", "Riverside")
#     city_graph.add_edge_by_vertices("Los Angeles", "Phoenix")
#     city_graph.add_edge_by_vertices("Riverside", "Phoenix")
#     city_graph.add_edge_by_vertices("Riverside", "Chicago")
#     city_graph.add_edge_by_vertices("Phoenix", "Dallas")
#     city_graph.add_edge_by_vertices("Phoenix", "Houston")
#     city_graph.add_edge_by_vertices("Dallas", "Chicago")
#     city_graph.add_edge_by_vertices("Dallas", "Atlanta")
#     city_graph.add_edge_by_vertices("Dallas", "Houston")
#     city_graph.add_edge_by_vertices("Houston", "Atlanta")
#     city_graph.add_edge_by_vertices("Houston", "Miami")
#     city_graph.add_edge_by_vertices("Atlanta", "Chicago")
#     city_graph.add_edge_by_vertices("Atlanta", "Washington")
#     city_graph.add_edge_by_vertices("Atlanta", "Miami")
#     city_graph.add_edge_by_vertices("Miami", "Washington")
#     city_graph.add_edge_by_vertices("Chicago", "Detroit")
#     city_graph.add_edge_by_vertices("Detroit", "Boston")
#     city_graph.add_edge_by_vertices("Detroit", "Washington")
#     city_graph.add_edge_by_vertices("Detroit", "New York")
#     city_graph.add_edge_by_vertices("Boston", "New York")
#     city_graph.add_edge_by_vertices("New York", "Philadelphia")
#     city_graph.add_edge_by_vertices("Philadelphia", "Washington")
#     print(city_graph)

# # повторное использование BFS из главы 2 для city_graph
# import sys
# sys.path.insert(0, '..') # так мы можем получить доступ к пакету Chapter2
#                         # в родительском каталоге

# from Chapter2.generic_search import bfs, Node, node_to_path

# bfs_result: Optional[Node[V]] = bfs("Boston", lambda х: х == "Miami",city_graph.neighbors_for_vertex)
# if bfs_result is None:
#     print("No solution found using breadth-first search!")
# else:
#     path: List[V] = node_to_path(bfs_result)
#     print("Path from Boston to Miami:")
#     print(path)

# from __future__ import annotations
# from dataclasses import dataclass
# from edge import Edge

# @dataclass
# class WeightedEdge(Edge):
#     weight: float

#     def reversed(self) -> WeightedEdge:
#         return WeightedEdge(self.v, self.u, self.weight)

#     # так можно упорядочить ребра по весу и найти ребро с минимальным весом
#     def _lt_(self, other: WeightedEdge) -> bool:
#         return self .weight < other.weight

#     def _str_(self) - > str:
#         return f"{self.u} {self.weight}> {self.v}"

# from typing import TypeVar, Generic, List, Tuple
# from graph import Graph
# from weighted_edge import WeightedEdge

# V = TypeVar('V')  # тип вершин в графе

# class WeightedGraph(Generic[V], Graph[V]):
#     def __init__(self, vertices: List[V] = []) -> None:
#         self ._vertices: List[V] = vertices
#         self._edges: List[List[WeightedEdge]] = [[] for _ in vertices]

#     def add_edge_by_indices(self, u: int, v: int, weight: float) -> None:
#         edge: WeightedEdge = WeightedEdge(u, v, weight)
#         self .add_edge(edge)  # Вызываем версию суперкласса

#     def add_edge_by_vertices(self, first: V, second: V, weight: float) -> None:
#         u: int = self._vertices.index(first)
#         v: int = self ._vertices.index(second)
#         self .add_edge_by_indices(u, v, weight)

#     def neighbors_for_index_with_weights(self, index: int) -> List[Tuple[V, float]]:
#         distance_tuples: List[Tuple[V, float]] = []
#         for edge in self.edges_for_index(index):
#             distance_tuples.append((self.vertex_at(edge.v), edge.weight))
#         return distance_tuples

#     def __str__(self) -> str:
#         desc: str = ""
#         for i in range(self.vertex_count):
#             desc += f"{self.vertex_at(i)} -> {self.neighbors_for_index_with_weights(i)}\n"
#         return desc


# if __name__ == "__main__":
#     city_graph2: WeightedGraph[str] = WeightedGraph(["Seattle", "San Francisco", "Los Angeles", "Riverside", "Phoenix",
#                                                      "Chicago", "Boston", "New York", "Atlanta", "Miami", "Dallas", "Houston", "Detroit", "Philadelphia", "Washington"])
#     city_graph2.add_edge_by_vertices("Seattle", "Chicago", 1737)
#     city_graph2.add_edge_by_vertices("Seattle", "San Francisco", 678)
#     city_graph2.add_edge_by_vertices("San Francisco", "Riverside", 386)
#     city_graph2.add_edge_by_vertices("San Francisco", "Los Angeles", 348)
#     city_graph2.add_edge_by_vertices("Los Angeles", "Riverside", 50)
#     city_graph2.add_edge_by_vertices("Los Angeles", "Phoenix", 357)
#     city_graph2.add_edge_by_vertices("Riverside", "Phoenix", 307)
#     city_graph2.add_edge_by_vertices("Riverside", "Chicago", 1704)
#     city_graph2.add_edge_by_vertices("Phoenix", "Dallas", 887)
#     city_graph2.add_edge_by_vertices("Phoenix", "Houston", 1015)
#     city_graph2.add_edge_by_vertices("Dallas", "Chicago", 805)
#     city_graph2.add_edge_by_vertices("Dallas", "Atlanta", 721)
#     city_graph2.add_edge_by_vertices("Dallas", "Houston", 225)
#     city_graph2.add_edge_by_vertices("Houston", "Atlanta", 702)
#     city_graph2.add_edge_by_vertices("Houston", "Miami", 968)
#     city_graph2.add_edge_by_vertices("Atlanta", "Chicago", 588)
#     city_graph2.add_edge_by_vertices("Atlanta", "Washington", 543)
#     city_graph2.add_edge_by_vertices("Atlanta", "Miami", 604)
#     city_graph2.add_edge_by_vertices("Miami", "Washington", 923)
#     city_graph2.add_edge_by_vertices("Chicago", "Detroit", 238)
#     city_graph2.add_edge_by_vertices("Detroit", "Boston", 613)
#     city_graph2.add_edge_by_vertices("Detroit", "Washington", 396)
#     city_graph2.add_edge_by_vertices("Detroit", "New York", 482)
#     city_graph2.add_edge_by_vertices("Boston", "New York", 190)
#     city_graph2.add_edge_by_vertices("New York", "Philadelphia", 81)
#     city_graph2.add_edge_by_vertices("Philadelphia", "Washington", 123)
#     print(city_graph2)

# Seattle -> [('Chicago', 1737), ('San Francisco', 678)]
# San Francisco -> [('Seattle', 678), ('Riverside', 386), ('Los Angeles', 348)]
# Los Angeles -> [('San Francisco', 348), ('Riverside', 50), ('Phoenix', 357)]
# Riverside -> [('San Francisco', 386), ('Los Angeles', 50), ('Phoenix', 307), ('Chicago', 1704)]
# Phoenix -> [('Los Angeles', 357), ('Riverside', 307), ('Dallas', 887), ('Houston', 1015)]
# Chicago -> [('Seattle', 1737), ('Riverside', 1704), ('Dallas', 805), ('Atlanta', 588), ('Detroit', 238)]
# Boston -> [('Detroit', 613), ('New York', 190)]
# New York -> [('Detroit', 482), ('Boston', 190), ('Philadelphia', 81)]
# Atlanta -> [('Dallas', 721), ('Houston', 702), ('Chicago', 588), ('Washington', 543), ('Miami', 604)]
# Miami -> [('Houston', 968), ('Atlanta', 604), ('Washington', 923)]
# Dallas -> [('Phoenix', 887), ('Chicago', 805), ('Atlanta', 721), ('Houston', 225)]
# Houston -> [('Phoenix', 1015), ('Dallas', 225), ('Atlanta', 702), ('Miami', 968)]
# Detroit -> [('Chicago', 238), ('Boston', 613), ('Washington', 396), ('New York', 482)]
# Philadelphia -> [('New York', 81), ('Washington', 123)]
# Washington -> [('Atlanta', 543), ('Miami', 923), ('Detroit', 396), ('Philadelphia', 123)]


# from typing import TypeVar, Generic, List
# from heapq import heappush, heappop

# Т = TypeVar('T')

# class PriorityQueue(Generic[T]):
#     def __init__(self) -> None:
#         self ._container: List[T] = []

#     @property
#     def empty(self) -> bool:
#         return not self ._container
#         # не true для пустого контейнера

#     def push(self, item: Т) -> None:
#         heappush(self._container, item)  # включить по приоритету

#     def pop(self) -> T:
#         return heappop(self._container)  # исключить по приоритету

#     def __repr__(self) -> str:
#         return repr(self._container)

# from typing import TypeVar, List, Optional
# from weighted_graph import WeightedGraph
# from weighted_edge import WeightedEdge
# from priority_queue import PriorityQueue

# V = TypeVar ('V') # тип вершин в графе
# WeightedPath = List[WeightedEdge] # псевдоним типа для путей

# def total_weight(wp: WeightedPath) -> float:
#     return sum([e.weight for е in wp])

# def mst(wg: WeightedGraph[V], start: int = 0) -> Optional[WeightedPath]:
#     if start > (wg.vertex_count - 1) or start < 0:
#         return None
#     result: WeightedPath = [] # содержит окончательное MST
#     pq: PriorityQueue[WeightedEdge] = PriorityQueue()
#     visited: [bool] = [False] * wg.vertex_count # здесь мы уже были

#     def visit(index: int):
#         visited[index] = True # пометить как прочитанное
#         for edge in wg.edges_for_index(index):
#         # добавляем Все ребра отсюда в pq
#             if not visited[edge.v]:
#                 pq.push(edge)

#     visit(start) # первая вершина, с которой все начинается

#     while not pq.empty: # продолжаем, пока остаются необработанные Вершины
#         edge = pq.рор()
#         if visited[edge.v]:
#             continue
#         result.append(edge)
#         visit(edge.v)
#         # никогда не просматрибаем дважды
#         # на данный момент это минимальный вес, так что добавляем в дерево

#         return result

#     def print_weighted_path(wg: WeightedGraph, wp: WeightedPath) -> None:
#         for edge in wp:
#             print(f"{wg.vertex_at(edge.u)} {edge.weight}> {wg.vertex_ at(edge.v)}")

#         print(f"Total weight: {total_weight(wp)}")

# def visit(index: int):
#     visited[index] = True # пометить как прочитанное
#     for edge in wg.edges_for_index(index):
#         if not visited[edge.v]:
#             pq.push(edge)

# while not pq.empty: # продолжаем, пока остаются необработанные вершины
#     edge = pq.pop()
#     if visited[edge.v]:
#         continue # никогда не просматриваем дважды
#         result.append(edge)
#         visit(edge.v)

#     return result

# if __name__ == "__main__":
#     city_graph2: WeightedGraph[str] = WeightedGraph(["Seattle", "San Francisco", "Los Angeles", "Riverside", "Phoenix", "Chicago", "Boston", "New York", "Atlanta", "Miami", "Dallas", "Houston", "Detroit", "Philadelphia", "Washington"])

#     city_graph2.add_edge_by_vertices("Seattle", "Chicago", 1737)
#     city_graph2.add_edge_by_vertices("Seattle", "San Francisco", 678)
#     city_graph2.add_edge_by_vertices("San Francisco", "Riverside", 386)
#     city_graph2.add_edge_by_vertices("San Francisco", "Los Angeles", 348)
#     city_graph2.add_edge_by_vertices("Los Angeles", "Riverside", 50)
#     city_graph2.add_edge_by_vertices("Los Angeles", "Phoenix", 357)
#     city_graph2.add_edge_by_vertices("Riverside", "Phoenix", 307)
#     city_graph2.add_edge_by_vertices("Riverside", "Chicago", 1704)
#     city_graph2.add_edge_by_vertices("Phoenix", "Dallas", 887)
#     city_graph2.add_edge_by_vertices("Phoenix", "Houston", 1015)
#     city_graph2.add_edge_by_vertices("Dallas", "Chicago", 805)
#     city_graph2.add_edge_by_vertices("Dallas", "Atlanta", 721)
#     city_graph2.add_edge_by_vertices("Dallas", "Houston", 225)
#     city_graph2.add_edge_by_vertices("Houston", "Atlanta", 702)
#     city_graph2.add_edge_by_vertices("Houston", "Miami", 968)
#     city_graph2.add_edge_by_vertices("Atlanta", "Chicago", 588)
#     city_graph2.add_edge_by_vertices("Atlanta", "Washington", 543)
#     city_graph2.add_edge_by_vertices("Atlanta", "Miami", 604)
#     city_graph2.add_edge_by_vertices("Miami", "Washington", 923)
#     city_graph2.add_edge_by_vertices("Chicago", "Detroit", 238)
#     city_graph2.add_edge_by_vertices("Detroit", "Boston", 613)
#     city_graph2.add_edge_by_vertices("Detroit", "Washington", 396)
#     city_graph2.add_edge_by_vertices("Detroit", "New York", 482)
#     city_graph2.add_edge_by_vertices("Boston", "New York", 190)
#     city_graph2.add_edge_by_vertices("New York", "Philadelphia", 81)
#     city_graph2.add_edge_by_vertices("Philadelphia", "Washington", 123)

#     result: Optional[WeightedPath] = mst(city_graph2)

#     if result is None:
#         print("No solution found!")
#     else:
#         print_weighted_path(city_graph2, result)


from __future__ import annotations
from typing import TypeVar, List, Optional, Tuple, Dict
from dataclasses import dataclass
from mst import WeightedPath, print_weighted_path
from weighted_graph import WeightedGraph
from weighted_edge import WeightedEdge
from priority_queue import PriorityQueue

V = TypeVar('V')  # тип вершин в графе


@dataclass
class DijkstraNode:
    vertex: int
    distance: float

    def __lt__(self, other: DijkstraNode) -> bool:
        return self.distance < other.distance

    def __eq__(self, other: DijkstraNode) -> bool:
        return self.distance == other.distance


def dijkstra(wg: WeightedGraph[V], root: V) -> Tuple[List[Optional[float]], Dict[int, WeightedEdge]]:
    first: int = wg.index_of(root)  # найти начальную вершину
    # вначале расстояния неизвестны
    distances: List[Optional[float]] = [None] * wg.vertex_count
    distances[first] = 0  # корневая Вершина равна е
    path_dict: Dict[int, WeightedEdge] = {}  # как добраться до каждой Вершины
    pq: PriorityQueue[DijkstraNode] = PriorityQueue()
    pq.push(DijkstraNode(first, 0))

    while not pq.empty:
        u: int = pq.pop().vertex  # исследовать ближайшую вершину
        dist_u: float = distances[u]  # это мы уже, должно быть видели
        # рассмотреть все ребра и вершины для данной вершины
        for we in wg.edges_for_index(u):
            # старое расстояние до этой вершины
            dist_v: float = distances[we.v]
            # старого расстояния не существует или найден более короткий путь
            if dist_v is None or dist_v > we.weight + dist_u:
                # изменить расстояние до этой вершины
                distances[we.v] = we.weight + dist_u
                # заменить ребро на более короткий путь к этой вершине
                path_dist[we.v] = we
                # вскоре мы это проверим
                pq.push(DijkstraNode(we.v, we.weight + dist_u))
    return distances, path_dict

# Вспомогательная функция для удобного доступа к результатам
# алгоритма Дейкстры


def distance_array_to_vertex_dict(wg: WeightedGraph[V], distances: List[Optional[float]]) -> Dict[V, Optional[float]]:
    distance_dict: Dict[V, Optional[float]] = {}
    for i in range(len(distances)):
        distance_dict[wg.vertex_at(i)] = distances[i]
    return distance_dict

# Принимает словарь ребер, позволяющих достичь каждого узла,
# и возвращает список ребер от start до епd


def path_dict_to_path(start: int, end: int, path_dict: Dict[int, WeightedEdge]) -> WeightedPath:
    if len(path_dict) == 0:
        return []
    edge_path: WeightedPath = []
    е: WeightedEdge = path_dict[end]
    edge_path.append(e)
    while e.u != start:
        е = path_dict[e.u]
        edge_path.append(e)
    return list(reversed(edge_path))


if __name__ == "__main__":
    city_graph2: WeightedGraph[str] = WeightedGraph(["Seattle", "San Francisco", "Los Angeles", "Riverside", "Phoenix",
                                                     "Chicago", "Boston", "New York", "Atlanta", "Miami", "Dallas", "Houston", "Detroit", "Philadelphia", "Washington"])
    city_graph2.add_edge_by_vertices("Seattle", "Chicago", 1737)
    city_graph2.add_edge_by_vertices("Seattle", "San Francisco", 678)
    city_graph2.add_edge_by_vertices("San Francisco", "Riverside", 386)
    city_graph2.add_edge_by_vertices("San Francisco", "Los Angeles", 348)
    city_graph2.add_edge_by_vertices("Los Angeles", "Riverside", 50)
    city_graph2.add_edge_by_vertices("Los Angeles", "Phoenix", 357)
    city_graph2.add_edge_by_vertices("Riverside", "Phoenix", 307)
    city_graph2.add_edge_by_vertices("Riverside", "Chicago", 1704)
    city_graph2.add_edge_by_vertices("Phoenix", "Dallas", 887)
    city_graph2.add_edge_by_vertices("Phoenix", "Houston", 1015)
    city_graph2.add_edge_by_vertices("Dallas", "Chicago", 805)
    city_graph2.add_edge_by_vertices("Dallas", "Atlanta", 721)
    city_graph2.add_edge_by_vertices("Dallas", "Houston", 225)
    city_graph2.add_edge_by_vertices("Houston", "Atlanta", 702)
    city_graph2.add_edge_by_vertices("Houston", "Miami", 968)
    city_graph2.add_edge_by_vertices("Atlanta", "Chicago", 588)
    city_graph2.add_edge_by_vertices("Atlanta", "Washington", 543)
    city_graph2.add_edge_by_vertices("Atlanta", "Miami", 604)
    city_graph2.add_edge_by_vertices("Miami", "Washington", 923)
    city_graph2.add_edge_by_vertices("Chicago", "Detroit", 238)
    city_graph2.add_edge_by_vertices("Detroit", "Boston", 613)
    city_graph2.add_edge_by_vertices("Detroit", "Washington", 396)
    city_graph2.add_edge_by_vertices("Detroit", "New Vork", 482)
    city_graph2.add_edge_by_vertices("Boston", "New Vork", 190)
    city_graph2.add_edge_by_vertices("New Vork", "Philadelphia", 81)
    city_graph2.add_edge_by_vertices("Philadelphia", "Washington", 123)

    distances, path_dict = dijkstra(city_graph2, "Los Angeles")
    name_distance: Dict[str, Optional[int]] = distance_array_to_vertex_dict(
        city_graph2, distances)
    print("Distances from Los Angeles:")
    for key, value in name_distance.items():
        print(f"{key} : {value}")
    print("")  # пустая строка

    print("Shortest path from Los Angeles to Boston:")
    path: WeightedPath = path_dict_to_path(city_graph2.index_of(
        "Los Angeles"), city_graph2.index_of("Boston"), path_dict)
    print_weighted_path(city_graph2, path)

Distances from Los Angeles:
Seattle: 1026
San Francisco: 348
Los Angeles: 0
Riverside: 50
Phoenix: 357
Chicago: 1754
Boston: 2605
New York: 2474
Atlanta: 1965
Miami: 2340
Dallas: 1244
Houston 1372
Detroit: 1992
Philadelphia: 2511
Washington: 2388

Shortest path from Los Angeles to Boston:
Los Angeles 50 > Riverside
Riverside 1704 > Chicago
Chicago 238 > Detroit
Detroit 613 > Boston
Total Weight: 2605
