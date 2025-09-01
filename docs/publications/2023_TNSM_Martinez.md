# Resource Abstractions in NFV Management and Orchestration: Experimental Evaluation

**Authors:** R. Martínez, _**L. Vettori**_, J. Baranda, J. Mangues-Bafalluy, E. Zeydan and B. Bakhshi.  
**Journal:** IEEE Transactions on Network and Service Management, vol. 20, no. 1, pp. 608-624, March 2023.  
**DOI:** [10.1109/TNSM.2022.3214381](https://doi.org/10.1109/TNSM.2022.3214381)

## Abstract

The expected complexity of shared 5G/6G cloud and network infrastructures requires a functional management and orchestration (MANO) architecture to automatically provision distinct vertical services. These are mapped as generic network services (NSes) specifying their computing and networking needs: Virtual Network Functions (VNFs) and Virtual Links. We focus on a hierarchical MANO implementation where a Resource Layer orchestrator handles the configuration of the physical infrastructure and exposes an abstract view of it to the upper-layer Service Orchestrator. Two different abstraction philosophies are adopted, namely the Infrastructure Abstraction, which pre-calculates the resource allocations before advertising them, and the Connection Service Abstraction, which exposes potential connectivity services without an actual resource allocation. The resulting abstracted infrastructure becomes the input of the Service Orchestrator to make (placement) decisions fulfilling the NS demands. Thus, a novel placement algorithm is devised which, unlike previous works, can handle NSes with arbitrary VNF topology demands. The performance of the MANO functions is experimentally evaluated by dynamically creating/terminating heterogeneous NSes in terms of: NS blocking, blocked bandwidth/VNF ratio, bandwidth occupancy, and VNF distribution per cloud site. From the results, Connection Service Abstraction does attain a more efficient use of resources and in general, performs better than the Infrastructure Abstraction approach.

[⬅ Back to Publications](index_journals.md)