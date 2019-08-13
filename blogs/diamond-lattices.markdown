# What I know about diamond lattices

Click here to load KaTeX.

The *Fibonacci lattices* $$L_{m,n}$$ are the subject of my Master's thesis. This document is a working reference, mostly for my own use, detailing what observations I've been able to assemble so far.

## What they are
More precise mathematical definitions for all this can be found in [Donnelly 2018](https://arxiv.org/abs/1812.04434). 

The set $$\mathbb{Z}^n$$ consists of all $$n$$-tuples with integer entries. Accordingly, we'll refer to its members as $$t_1, t_2, \dots$$.

We say an tuple $$t_1$$ *covers* another tuple $$t_2$$ if it's obtainable from $$t_2$$ by adding one to exactly one entry. So $$(2, 5, 8) \in \mathbb{Z}^3$$ covers $$(2, 5, 7)$$ and $$(2, 4, 8)$$, but not $$(2, 4, 7)$$ or $$(3, 6, 9)$$.

For us it will suffice to think of a *diamond lattice* as a connected subset of $$\mathbb{Z}^n$$ that is closed under entrywise min and max. Hopefully the picture at right makes clear the choice of name; every pair of descending edges is matched by a pair of 

*Connected* means 
