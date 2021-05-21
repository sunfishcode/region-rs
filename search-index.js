var searchIndex = JSON.parse('{\
"region":{"doc":"Cross-platform virtual memory API.","t":[0,5,5,5,5,5,3,4,13,13,13,13,13,6,5,5,3,5,5,3,5,5,3,3,11,11,11,11,11,11,11,11,11,11,11,11,3,18,18,18,18,18,18,18,18,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["page","size","floor","ceil","alloc","alloc_at","Memory","Error","UnmappedRegion","InvalidParameter","ProcfsInput","SystemCall","MachCall","Result","lock","unlock","LockGuard","protect","protect_with_handle","ProtectGuard","query","query_range","QueryIter","Region","as_ptr","as_range","as_ptr_range","is_committed","is_readable","is_writable","is_executable","is_guarded","is_shared","len","is_empty","protection","Protection","NONE","READ","WRITE","EXECUTE","READ_EXECUTE","READ_WRITE","READ_WRITE_EXECUTE","WRITE_EXECUTE","empty","all","bits","from_bits","from_bits_truncate","from_bits_unchecked","is_empty","is_all","intersects","contains","insert","remove","toggle","set","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","to_string","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","into_iter","borrow","borrow_mut","try_from","try_into","type_id","from","into","to_owned","clone_into","borrow","borrow_mut","try_from","try_into","type_id","from","into","to_owned","clone_into","to_string","borrow","borrow_mut","try_from","try_into","type_id","drop","drop","drop","extend","next","clone","clone","default","default","cmp","eq","ne","eq","ne","partial_cmp","fmt","fmt","fmt","fmt","fmt","sub","sub_assign","not","bitand","bitor","bitxor","bitand_assign","bitor_assign","bitxor_assign","hash","from_iter","fmt","fmt","fmt","fmt","as_ptr","as_range","as_ptr_range","len"],"q":["region","region::page","","","region","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["Page related functions.","Returns the operating system’s page size.","Rounds an address down to its closest page boundary.","Rounds an address up to its closest page boundary.","Allocates one or more pages of memory with defined a …","Allocates one or more pages of memory, at a specific …","A handle to a mapped memory region.","A collection of possible errors.","The queried memory is unmapped.","A supplied parameter is invalid.","A procfs region failed to be parsed.","A system call failed.","A macOS kernel call failed","The result type used by this library.","Locks one or more memory regions to RAM.","Unlocks one or more memory regions from RAM.","A RAII implementation of a scoped lock.","Changes the memory protection of one or more pages.","Temporarily changes the memory protection of one or more …","A RAII implementation of a scoped protection guard.","Queries the OS with an address, returning the region it …","Queries the OS for mapped regions that overlap with the …","An iterator over the [Region]s that encompass an address …","A descriptor for a mapped memory region.","Returns a pointer to the region’s base address.","Returns a range spanning the region’s address space.","Returns two raw pointers spanning the region’s address …","Returns whether the region is committed or not.","Returns whether the region is readable or not.","Returns whether the region is writable or not.","Returns whether the region is executable or not.","Returns whether the region is guarded or not.","Returns whether the region is shared or not.","Returns the size of the region.","Returns whether region is empty or not.","Returns the protection flags of the region.","A bitflag of zero or more protection attributes.","No access allowed at all.","Read access; writing and/or executing data will panic.","Write access; this flag alone may not be supported on all …","Execute access; this may not be allowed depending on DEP.","Read and execute shorthand.","Read and write shorthand.","Read, write and execute shorthand.","Write and execute shorthand.","Returns an empty set of flags","Returns the set containing all flags.","Returns the raw value of the flags currently stored.","Convert from underlying bit representation, unless that …","Convert from underlying bit representation, dropping any …","Convert from underlying bit representation, preserving all…","Returns <code>true</code> if no flags are currently stored.","Returns <code>true</code> if all flags are currently set.","Returns <code>true</code> if there are flags common to both <code>self</code> and …","Returns <code>true</code> all of the flags in <code>other</code> are contained …","Inserts the specified flags in-place.","Removes the specified flags in-place.","Toggles the specified flags in-place.","Inserts or removes the specified flags depending on the …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Advances the iterator and returns the next region.","","","","","","","","","","","","","","","","Returns the set difference of the two sets of flags.","Disables all flags enabled in the set.","Returns the complement of this set of flags.","Returns the intersection between the two sets of flags.","Returns the union of the two sets of flags.","Returns the left flags, but with all the right flags …","Disables all flags disabled in the set.","Adds the set of flags.","Toggles the set of flags.","","","","","","","Returns a pointer to the allocation’s base address.","Returns a range spanning the allocation’s address space.","Returns two raw pointers spanning the allocation’s …","Returns the size of the allocation."],"i":[0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,5,5,5,5,5,5,5,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,5,6,3,7,2,3,2,3,3,2,2,3,3,3,1,2,3,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4],"f":[null,[[],["usize",15]],[[]],[[]],[[["usize",15],["protection",3]],[["memory",3],["result",6]]],[[["usize",15],["protection",3]],[["memory",3],["result",6]]],null,null,null,null,null,null,null,null,[[["usize",15]],[["result",6],["lockguard",3]]],[[["usize",15]],["result",6]],null,[[["usize",15],["protection",3]],["result",6]],[[["usize",15],["protection",3]],[["result",6],["protectguard",3]]],null,[[],[["result",6],["region",3]]],[[["usize",15]],[["result",6],["queryiter",3]]],null,null,[[]],[[],[["usize",15],["range",3]]],[[],["range",3]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["usize",15]],[[],["bool",15]],[[],["protection",3]],null,null,null,null,null,null,null,null,null,[[],["protection",3]],[[],["protection",3]],[[],["usize",15]],[[["usize",15]],[["option",4],["protection",3]]],[[["usize",15]],["protection",3]],[[["usize",15]],["protection",3]],[[],["bool",15]],[[],["bool",15]],[[["protection",3]],["bool",15]],[[["protection",3]],["bool",15]],[[["protection",3]]],[[["protection",3]]],[[["protection",3]]],[[["bool",15],["protection",3]]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[],["string",3]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["string",3]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[["intoiterator",8]]],[[],["option",4]],[[],["region",3]],[[],["protection",3]],[[]],[[],["protection",3]],[[["protection",3]],["ordering",4]],[[["region",3]],["bool",15]],[[["region",3]],["bool",15]],[[["protection",3]],["bool",15]],[[["protection",3]],["bool",15]],[[["protection",3]],[["ordering",4],["option",4]]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["protection",3]],["protection",3]],[[["protection",3]]],[[],["protection",3]],[[["protection",3]],["protection",3]],[[["protection",3]],["protection",3]],[[["protection",3]],["protection",3]],[[["protection",3]]],[[["protection",3]]],[[["protection",3]]],[[]],[[["intoiterator",8]],["protection",3]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[],[["usize",15],["range",3]]],[[],["range",3]],[[],["usize",15]]],"p":[[4,"Error"],[3,"Region"],[3,"Protection"],[3,"Memory"],[3,"LockGuard"],[3,"ProtectGuard"],[3,"QueryIter"]]}\
}');
initSearch(searchIndex);