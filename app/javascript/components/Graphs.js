import React, {Component} from "react";

class Graphs extends Component {
  render() {
    return (
      <>
        <p className="mt-5">Graphs</p>
        <p>
          A perfect layman's example might be Facebook. The network of you, your
          friends, and their friends etc, are collectively refered to as the
          social graph.
        </p>
        <p>
          In this "graph" the people are considered nodes of the graph and the
          edges are friendship links.
        </p>
        <p>
          In Facebook friend is a bidirectional relationship (A is B's Friend =>
          B is A's friend) so the graph is an Undirected Graph. A network like
          Google+ or Twitter would be considered a Directed Graph since the
          direction of the relationship has meaning here.
        </p>
        <p>
          All of these graphs are refered to as cyclic graphs, as the
          relationships between nodes can form cycles. A Family Tree, on the
          other hand, is a special kind of graph which, among other things, is
          Acyclic since there cannot be cycles in family tree relatioship. (It
          is technically called a Directed Acyclic Graph (DAG) since its both
          directed and acyclic)
        </p>
        <p>
          This should cover all of the basic jargon involving graphs, so now you
          should be able to follow the rest of the material in the field.
        </p>
        <i>
          from:
          https://softwareengineering.stackexchange.com/questions/168058/what-are-graphs-in-laymens-terms
        </i>
      </>
    );
  }
}

export default Graphs;
